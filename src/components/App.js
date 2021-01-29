import Homepage from "../pages/Homepage";
import { BrowserRouter, Route } from "react-router-dom";
import PostDetailsPage from "../pages/PostDetailsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Homepage} />
      <Route path="/post/:post_id" exact component={PostDetailsPage} />
    </BrowserRouter>
  );
};

export default App;
