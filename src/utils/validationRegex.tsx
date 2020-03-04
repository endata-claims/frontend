export const nameRegexp = /[^\sA-Za-zÀ-ÖØ-öø-ÿ.'\-&]/
export const clientNameRegexp = /[^\s0-9A-Za-zÀ-ÖØ-öø-ÿ.'\-&]/
export const emailRegexp = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,5}))/
export const addressRegexp = /[^\sA-Za-z0-9#'.,\-/]/
export const suburbRegexp = /[^\sA-Za-z]/
export const refNumberRegexp = /^[A-Za-z0-9]+$/

// this left
export const commonCharactersRegexp = /[^\sA-Za-z0-9#'.,\-/]/