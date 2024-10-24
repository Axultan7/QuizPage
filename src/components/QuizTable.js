import TableRow from "./TableRow";
import "./QuizTable.css";

const QuizTable = ({ quizzes }) => (
    <div className="quiz-table">
        <table>
            <thead>
                <tr>
                    <th>Status</th>
                    <th>Title</th>
                    <th>Average</th>
                    <th>Difficulty</th>
                    <th>Questions</th>
                </tr>
            </thead>
            <tbody>
                {quizzes.map((quiz) => (
                    <TableRow key={quiz.id} quiz={quiz} />
                ))}
            </tbody>
        </table>
    </div>
);

export default QuizTable;
