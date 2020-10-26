/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface ContinentFilterInput {
  code?: StringQueryOperatorInput | null;
}

export interface StringQueryOperatorInput {
  eq?: string | null;
  ne?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
  regex?: string | null;
  glob?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
