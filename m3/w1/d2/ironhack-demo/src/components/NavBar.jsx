import React from "react";
import { v4 as uuidv4 } from "uuid";

// function NavBar(props) {
//   return (
//     <nav>
//       <ul>
//         {props.navigationLinks.map((navigationLink) => {
//           return <li>{navigationLink}</li>;
//         })}
//       </ul>
//     </nav>
//   );
// }

/* this is the same but in destructure form */
function NavBar(props) {
  const { navigationLinks } = props;

  return (
    <nav>
      <ul>
        {navigationLinks.map((navigationLink) => {
          return <li key={uuidv4()}> {navigationLink}</li>;
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
