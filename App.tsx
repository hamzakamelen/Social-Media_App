import React from 'react'
import { Provider } from "react-redux";
import StackNavigation from './Navigation/Stack';
import Store from './redux/store/store';
import TabNavigation from './Navigation/Tabs';


function App() {
  // const [isLogin, setisLogin] = useState(false);

  return (
    <>
    <Provider store={Store}>
    {/* <StackNavigation /> */}
    <TabNavigation />
    </Provider>
    </>
  )
}
export default App;