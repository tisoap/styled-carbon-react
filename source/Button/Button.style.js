import { css } from '@emotion/core'

const baseButtonStyle = () => css`
  align-items: center;
  background-color: #0062ff;
  border-radius: 0;
  border: 1px solid transparent;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  font-family: "IBM Plex Sans", "Helvetica Neue", "Arial", sans-serif;
  font-size: 14px;
  font-weight: 400;
  justify-content: space-between;
  letter-spacing: .16px;
  line-height: 18px;
  margin: 0;
  max-width: 320px;
  min-height: 48px;
  outline: 3px solid transparent;
  padding: 14px 63px 14px 15px;
  position: relative;
  text-align: left;
  text-decoration: none;
  text-rendering: optimizeLegibility;
  transition: 70ms cubic-bezier(0, 0, .38, .9);

  &:before {
    border: 1px solid transparent;
    box-sizing: border-box;
    content: "";
    height: calc(100% - 4px);
    left: 2px;
    position: absolute;
    top: 2px;
    transition: 70ms cubic-bezier(0,0,.38,.9);
    width: calc(100% - 4px);
  }

  &:after {
    border: 3px solid transparent;
    box-sizing: border-box;
    content: "";
    height: calc(100% + 2px);
    left: -1px;
    position: absolute;
    top: -1px;
    transition: 70ms cubic-bezier(0,0,.38,.9);
    width: calc(100% + 2px);
  }

  &:hover {
    color: #fff;
    background-color: #0353e9;
  }

  &:active {
    background-color: #0530ad;
  }

  &:focus:before {
    border-color: #fff;
  }

  &:focus:after {
    border-color: #0062ff;
  }
`

export default baseButtonStyle
