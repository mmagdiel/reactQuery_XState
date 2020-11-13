import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "pages/home";
import One from "pages/one";
import Two from "pages/two";
import Four from "pages/four";
import Three from "pages/three";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";

const queryCache = new QueryCache();
export default function Router() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <BrowserRouter>
        <Switch>
          <Route path="/one" exact component={One} />
          <Route path="/two" exact component={Two} />
          <Route path="/three" exact component={Three} />
          <Route path="/four" exact component={Four} />
          <Route path="/" exact component={Home} />
        </Switch>
        <ReactQueryDevtools initialIsOpen />
      </BrowserRouter>
    </ReactQueryCacheProvider>
  );
}
