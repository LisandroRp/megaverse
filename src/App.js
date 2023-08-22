import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";
import useAppDispatch from './hooks/useAppDispatch';
import useAppSelector from './hooks/useAppSelector';
import { getGoal } from "./app/redux/app/thunks/appThunk"
import ComethController from './app/controllers/ComethController';
import SoloonsController from './app/controllers/SoloonsController';
import PolyanetsController from './app/controllers/PolyanetsController';

const candidateId = process.env.REACT_APP_CANDIDATE_ID

const soloonsController = new SoloonsController();
const comethController = new ComethController();
const polyanetsController = new PolyanetsController();

function App() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.app);


  useEffect(() => {
    if (data)
      postStars()
  }, [data])

  const postStars = async () => {
    const promises = [];

    data.forEach((row, rowIndex) => {
      row.forEach((value, colIndex) => {
        let star = ""
        if (value.includes("_"))
          star = value.split("_")[1]
        else
          star = value
        switch (star) {
          case "POLYANET":
            promises.push(() => polyanetsController.postPolyanets({ row: rowIndex, column: colIndex, candidateId }));
            break;
          case "SOLOON":
            promises.push(() => soloonsController.postSoloons({ row: rowIndex, column: colIndex, color: value.split("_")[0].toLocaleLowerCase(), candidateId }));
            break;
          case "COMETH":
            promises.push(() => comethController.postCometh({ row: rowIndex, column: colIndex, direction: value.split("_")[0].toLocaleLowerCase(), candidateId }));
            break
          default:
            break;
        }
      });
    });
    executePromisesSequentially(promises)
  }

  async function executePromisesSequentially(promises) {
    const delayBetweenCalls = 2000;
    console.log("total stars: ", promises.length)
    await Promise.all(
      promises.map(async (value, index) => {
        await new Promise(resolve => setTimeout(resolve, delayBetweenCalls * index));
        if (index % 10 === 0)
          console.log("star number: ", index)
        await value();
      })
    );
    console.log("finnish");
  }

  const getCandidateGoal = () => {
    dispatch(getGoal())
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={getCandidateGoal}>
          Create Megaverse
        </button>
      </header>
    </div>
  );
}

export default App;
