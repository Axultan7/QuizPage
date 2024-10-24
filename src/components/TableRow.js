import "./TableRow.css";
import checkIcon from "../images/check.svg";

const TableRow = ({ quiz }) => {
  const getDifficultyClass = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "difficulty-easy";
      case "Medium":
        return "difficulty-medium";
      case "Hard":
        return "difficulty-hard";
      default:
        return "";
    }
  };

  return (
    <tr className="table-row">
      <td className="status-icon">
        {quiz.status === "Completed" ? (
          <img src={checkIcon} alt="Check Icon"  className="check"/>
        ) : (
          ""
        )}
      </td>
      <td>{quiz.title}</td>
      <td>{quiz.average}</td>
      <td className={getDifficultyClass(quiz.difficulty)}>
        {quiz.difficulty}
      </td>
      <td>{quiz.questions}</td>
    </tr>
  );
};

export default TableRow;
