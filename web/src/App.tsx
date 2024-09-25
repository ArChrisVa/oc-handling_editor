import React, { useState } from "react";
import { debugData } from "./utils/debugData";
import { fetchNui } from "./utils/fetchNui";
import { Box, Flex } from "@chakra-ui/react";
import { useNuiEvent } from "./hooks/useNuiEvent";
import { isEnvBrowser } from "./utils/misc";
import { useEffect } from "react";
import Handling_editor from "./components/Handling_editor";
import Sidemenu from "./components/Sidemenu";



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
        <Box 
          bg="black.200"
          h="100vh"
        >
          <Flex
            justifyContent={"space-between"}
            minH = {"100%"}
          >
            <Box w="24%" m={2}>
              <Handling_editor />
            </Box>
            <Box w="24%" m={2}>
              <Sidemenu />
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
};
export default App;
