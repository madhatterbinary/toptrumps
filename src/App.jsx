import React, { useEffect, useState, useCallback, Fragment } from 'react';
import ScoreNav from './components/Navigation/ScoreNav';
import GamePanel from './components/Panels/GamePanel';
import ControlNav from './components/Navigation/ControlNav';
import shuffleArray from './utils/shuffleArray';
import ImagesData from './data/images.json';
import useSWR from "swr";
import {
  STATUS_READY,
  STATUS_DONE,
  STATUS_OVER,
  STATUS_REPLAY,
  PLAYER_1,
  PLAYER_2,
} from './constants/constants';
import './App.scss';

const url = "https://swapi.dev/api/vehicles/";

function App () {
  const [game, setGame] = useState({firstRender: true});
  const [errorMsg, setErrorMsg] = useState("");
  const [loadingMsg, setLoadingMsg] = useState("");
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: result, error } = useSWR(url, fetcher);

  const handleGameOver = useCallback(() => {
    if(game.status === "over" && !game.firstRender) {
      setGame({...game, status: STATUS_REPLAY});
    }
  },[game]);

  const handleResetGame = useCallback(() => {
    if (game.firstRender || game.status === STATUS_REPLAY) {
      if (error) {
        setErrorMsg("Something went wrong");
      } else if (!result) {
        setLoadingMsg("Loading...");
      } else {
        const images = Object.values(ImagesData.images);
        const resultAddedImgs = result.results.map((item,index) => {
          return {...item, image:Object.values(images[index])[0]};
        });
        const results = shuffleArray(resultAddedImgs);
        const halfLength = Math.ceil(results.length / 2);
        setGame({
          status: STATUS_READY,
          lastWinner: undefined,
          deck1: results.slice(0, halfLength),
          deck2: results.slice(halfLength),
          selectedAttribute: undefined,
          isDraw: false,
          firstRender: false,
          winner: undefined,
        });
      }
    }
  }, [game, result, error]);

  useEffect(() =>{
     handleResetGame();
  },[handleResetGame, game, game.winner]);

  const handleAttributeSelection = (attributeKey) => {
    setGame({
      ...game,
      selectedAttribute: attributeKey
    })
  }

  const handleButtonClick= () => {
    const card1 = game.deck1[0];
    const card2 = game.deck2[0];
    switch (game.status) {
      case STATUS_OVER:
        handleGameOver();
        break;
      case STATUS_REPLAY:
        handleResetGame();
        break;
      case STATUS_READY:
        handlePlay(card1, card2);
        break;
      default:
        handleShuffle(card1, card2);
    }
  }

  const willGameEnd = (game) => {
    return !game.isDraw && 
      ((game.lastWinner === PLAYER_1 && game.deck2.length === 1) ||
      (game.lastWinner === PLAYER_2 && game.deck1.length === 1));
  }

  const handlePlay = (card1, card2) => {
    const attribute1 = parseInt(card1[game.selectedAttribute], 10);
    const attribute2 = parseInt(card2[game.selectedAttribute], 10);
    let newGame = {};

    if (card1.topTrump || attribute1 > attribute2) {
      newGame = {...game, lastWinner: PLAYER_1 };
    } else if (card2.topTrump || attribute1 < attribute2) {
      newGame = {...game, lastWinner: PLAYER_2 };
    } else {
      newGame = {...game, isDraw: true };
    }
    newGame = {...newGame,
     status: willGameEnd(newGame) ? STATUS_OVER : STATUS_DONE,
     winner: willGameEnd(newGame) ? newGame.lastWinner : undefined
    };
    setGame({
      ...newGame
      });
  }

  const handleShuffle= (card1, card2) => {
    const newGame = {
      ...game,
      status: STATUS_READY,
      selectedAttribute: undefined,
      isDraw: false,
    };
    if (game.isDraw) {
      newGame.deck1 = [...game.deck1.slice(1), card1];
      newGame.deck2 = [...game.deck2.slice(1), card2];
    } else {
      newGame.deck1 = [...game.deck1.slice(1), ...(game.lastWinner === PLAYER_1 ? [card1, card2] : [])];
      newGame.deck2 = [...game.deck2.slice(1), ...(game.lastWinner === PLAYER_2 ? [card1, card2] : [])];
    }
    setGame({
      ...game,
      ...newGame
    });
  }
    if (error) {
      return <div className="star-wars-top-trumps">{errorMsg}</div>;
    } else if (!result) {
      return <div className="star-wars-top-trumps">{loadingMsg}</div>
    }

    return (
      <div className="star-wars-top-trumps">
      {
        game && game.deck1 && (
        <Fragment>
          <ScoreNav
            player1Score={
              game.status === "over" && game.deck1.length === 1 ?
              0 :
              game.status === "over" && game.deck1.length === 9 ?
              10 :
              game.deck1.length
            }
            player2Score={
              game.status === "over" && game.deck2.length === 1 ?
              0 :
              game.status === "over" && game.deck2.length === 9 ?
              10 :
              game.deck2.length
            }
          />
          {game.status === STATUS_OVER && (
            <div className={`winner-box ${game.winner}`}>
            {game.winner ==="player1" ? 
            <span>Player 1 won</span> :
            <span>Player 2 won</span>
            }
            </div>
          )}
          <GamePanel
            player1Card={game.deck1[0]}
            player2Card={game.deck2[0]}
            selectedAttribute={game.selectedAttribute}
            status={game.status}
            handleAttributeSelection={handleAttributeSelection}
            lastWinner={game.lastWinner}
            isDraw={game.isDraw}
          />
          <ControlNav
            status={game.status}
            isPlayEnabled={!!game.selectedAttribute}
            handleButtonClick={handleButtonClick}
          />
        </Fragment>
        )
      }
      </div>
    );
}

export default App;
