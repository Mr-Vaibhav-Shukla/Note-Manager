import "./index.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { ProtectedApp } from "App";
import { StrictMode } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { NoteBrowse } from "pages/NoteBrowse/NoteBrowse";
import { Note } from "pages/Note/Note";
import { NoteCreate } from "pages/NoteCreate/NoteCreate";
import { SignIn } from "pages/SignIn/SignIn";
import { SignUp } from "pages/SignUp/SignUp";
import { PageNotFound } from "pages/PageNotFound/PageNotFound";
import { FirebaseApp } from "./services/firebase";
import { PersistGate } from "redux-persist/integration/react";

FirebaseApp.init();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<ProtectedApp />}>
              <Route path="/" element={<NoteBrowse />} />
              <Route path="/note/:noteId" element={<Note />} />
              <Route path="/note/new" element={<NoteCreate />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
