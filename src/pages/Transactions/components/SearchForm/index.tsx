import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <label className="sr-only" htmlFor="search">
        Busque uma transação
      </label>
      <input id="search" type="text" placeholder="Busque uma transação" />

      <button>
        <MagnifyingGlass size={20} weight="bold" />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
