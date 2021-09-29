import React, { FunctionComponent } from "react";
import { Box, List, ListItem } from "@material-ui/core";

interface OwnProps {}

type Props = OwnProps;
const functionalities = [
  "Technologia backend: Firebase",
  "Technologia frontend: React, redux, saga, typescript",
  "Przycisk do wylogowania oraz odnosnik do zamówień użytkownika znajduje się w sidebarze (otwieranym po kliknieciu" +
    " na przycisk z lewej strony sidebara)",
  "sortowanie",
  "filtrowanie",
  "paginacja  (nalezy kliknac 'Show more clothes' bedac zalogowanym na stronie glownej by pobrać wiecej ubrań)",
  "autoryzacja",
  "autentykacja",
  "JWT",
  "Wylogowanie",
  "przekierowania url",
  "obsluga zalogowanego/niezalogowanego uzytkownika",
  "CRUD dla produktów (dla zalogowanego uzytkownika dodawanie/usuwanie wlasnych produktow)",
  "Historia adresów",
  "I to co widać :)",
];

const Help: FunctionComponent<Props> = (props) => {
  return (
    <>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <nav aria-label="main mailbox folders">
          <List>
            {functionalities.map((value, key) => (
              <ListItem>{`${key + 1}. ${value}`}</ListItem>
            ))}
          </List>
        </nav>
      </Box>
    </>
  );
};

export default Help;
