import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { Desk, Mobile, PaginationContainer } from "./PaginationStyles";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <PaginationContainer>
      <PrimaryButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Desk>&lt;&lt; Anterior</Desk>
        <Mobile>&lt;&lt;</Mobile>
      </PrimaryButton>
      <Desk>
        Página {currentPage} de {totalPages}
      </Desk>
      <Mobile>
        {currentPage} de {totalPages}
      </Mobile>
      <PrimaryButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <Desk>Siguiente &gt;&gt;</Desk>
        <Mobile>&gt;&gt;</Mobile>
      </PrimaryButton>
    </PaginationContainer>
  );
}
