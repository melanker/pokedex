import {QueryClientProvider, QueryClient} from "react-query";
import Main from "./views/Main/Main";
import {ReactQueryDevtools} from "react-query/devtools";
import styled from "@emotion/styled";

const queryClient = new QueryClient()

const AppContainer = styled.div`
  display: flex;
  flex: 1;
`

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AppContainer>
                <Main/>
            </AppContainer>
            <ReactQueryDevtools/>
        </QueryClientProvider>
    );
}

export default App;
