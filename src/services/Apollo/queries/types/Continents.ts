/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContinentFilterInput } from "./../../../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: Continents
// ====================================================

export interface Continents_continents {
  __typename: "Continent";
  code: string;
  name: string;
}

export interface Continents {
  continents: Continents_continents[];
}

export interface ContinentsVariables {
  filter?: ContinentFilterInput | null;
}
