import React from "react";
import {
  LocalizationProvider,
  QueryClientProvider,
  ThemeProvider,
  TodoProvider,
} from "providers";
import { AppLayout, Header, TodoList, News } from "components";
import "styles/global.css";

const App = () => {
  return (
    <LocalizationProvider>
      <ThemeProvider>
        <QueryClientProvider>
          <TodoProvider>
            <AppLayout>
              <Header />
              <TodoList />
              <News />
            </AppLayout>
          </TodoProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </LocalizationProvider>
  );
};

export default App;
