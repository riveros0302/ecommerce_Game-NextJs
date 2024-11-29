import { BasicLayout } from "@/layouts";
import { Container } from "semantic-ui-react";
import { size } from "lodash";
import {
  GridGames,
  NoResult,
  Pagination,
  Separator,
} from "@/components/Shared";
import React, { useEffect } from "react";

export default function search(props) {
  const { games, pagination, searchText } = props;
  const hasResult = size(games) > 0;

  useEffect(() => {
    document.getElementById("search-games").focus();
  }, []);

  return (
    <>
      <BasicLayout relative isOpenSearch>
        <Container>
          <Separator height={50} />

          <h2>Buscando: {searchText}</h2>
          {hasResult ? (
            <>
              <GridGames games={games} />
              <Separator height={30} />
              <Pagination
                currentPage={pagination.page}
                totalPages={pagination.pageCount}
              />
              <Separator height={100} />
            </>
          ) : (
            <NoResult text="No se ha encontrado resultados" />
          )}
        </Container>
      </BasicLayout>
    </>
  );
}
