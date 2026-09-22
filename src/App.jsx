import MemoBasic from "./MemoBasic";
import MemoBoolean from "./MemoBoolean";
import MemoChangingProps from "./MemoChangingProps";
import MemoFunction from "./MemoFunction";
import MemoMultipleProps from "./MemoMultipleProps";
import MemoNumber from "./MemoNumber";
import MemoObject from "./MemoObject";
import MemoProps from "./MemoProps";
import MemoUseCallback from "./MemoUseCallback";
import MemoUseMemo from "./MemoUseMemo";

function App() {
  return (
    <div>
      <h2>24 - React.memo</h2>
      <hr />

      {/* Example 1 */}
      <MemoBasic />
      <hr />

      {/* Example 2 */}
      <MemoProps />
      <hr />

      {/* Example 3 */}
      <MemoNumber />
      <hr />

      {/* Example 4 */}
      <MemoMultipleProps />
      <hr />

      {/* Example 5 */}
      <MemoBoolean />
      <hr />

      {/* Example 6 */}
      <MemoObject />
      <hr />

      {/* Example 7 */}
      <MemoUseMemo />
      <hr />

      {/* Example 8 */}
      <MemoFunction />
      <hr />

      {/* Example 9 */}
      <MemoUseCallback />
      <hr />

      {/* Example 10 */}
      <MemoChangingProps />
    </div>
  );
}

export default App;