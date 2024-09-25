import React, { useState } from "react";
import { debugData } from "./utils/debugData";
import { fetchNui } from "./utils/fetchNui";
import { Box } from "@chakra-ui/react";
import { useNuiEvent } from "./hooks/useNuiEvent";
import { isEnvBrowser } from "./utils/misc";
import { useEffect } from "react";
import Handling_editor from "./components/Handling_editor";



// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

{/*}
interface ReturnClientDataCompProps {
  data: unknown;
}

const ReturnClientDataComp: React.FC<ReturnClientDataCompProps> = ({
  data,
}) => (
  <>
    <h5>Returned Data:</h5>
    <pre>
      <code>{JSON.stringify(data, null)}</code>
    </pre>
  </>
);

interface ReturnData {
  x: number;
  y: number;
  z: number;
}
*/}

const App: React.FC = () => {
  //const [clientData, setClientData] = useState<ReturnData | null>(null);
  const [visible, setVisible] = useState(false);
  {/*}
  const handleGetClientData = () => {
    fetchNui<ReturnData>("getClientData")
      .then((retData) => {
        console.log("Got return data from client scripts:");
        console.dir(retData);
        setClientData(retData);
      })
      .catch((e) => {
        console.error("Setting mock data due to error", e);
        setClientData({ x: 500, y: 300, z: 200 });
      });
  };
  */}

  useNuiEvent<boolean>("setVisible", setVisible);

  // Handle pressing escape/backspace
  useEffect(() => {
    // Only attach listener when we are visible
    if (!visible) return;

    const keyHandler = (e: KeyboardEvent) => {
      if (["Backspace", "Escape"].includes(e.code)) {
        if (!isEnvBrowser()) fetchNui("hideFrame");
        else setVisible(!visible);
      }
    };

    window.addEventListener("keydown", keyHandler);

    return () => window.removeEventListener("keydown", keyHandler);
  }, [visible]);

  return (
    <>
      {visible && (
        <Box  m="auto" mt={6} w="95%" h="95vh" bg="#474747" border="1px borderStyle=round">
          <Handling_editor />
        </Box>
      )}
    </>
  );
};
export default App;
