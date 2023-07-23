import VariablesAndConstants from "./variables-and-constants";
import VariableTypes from "./variable-types.js";
import BooleanVariables from "./boolean-variables.js";
import IfElse from "./if-else.js";
import TernaryOperator from "./ternary-operator.js"
import WorkingWithFunctions from "./workingwithfunctions.js"
import WorkingWithArrays from "./working-with-arrays"
import TemplateLiterals from "./template-literals";
import House from "./House";
import Spread from "./spread"
import Destructing from "./destructing"
import FunctionDestructing from "./function-destructing"

function JavaScript() {
    console.log('Hello World!');
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/>
          <VariableTypes/>
          <BooleanVariables/>
          <IfElse/>
          <TernaryOperator/>
          <WorkingWithFunctions/>
          <WorkingWithArrays/>
          <TemplateLiterals/>
          <House/>
          <Spread/>
          <Destructing/>
          <FunctionDestructing/>
       </div>
    );
 }
 export default JavaScript
 