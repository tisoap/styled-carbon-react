import { css } from '@emotion/core'

export const baseButtonStyle = (props) => {
  const { iconOnly } = props

  const padding = (iconOnly)
    ? '11px 13px 11px 12px'
    : '11px 60px 11px 12px'

  return css`
    align-items: center;
    background-color: #0062ff;
    border-radius: 0;
    border: 3px solid transparent;
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
    margin: 8px;
    max-width: 320px;
    min-height: 48px;
    outline-offset: -4px;
    outline: 1px solid transparent;
    overflow: visible;
    padding: ${padding};
    position: relative;
    text-align: left;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    transition: all 70ms cubic-bezier(0, 0, .38, .9);

    &:active {
      background-color: #0530ad;
    }

    &:before {
      content: ''
    }

    &:focus {
      border-color: #0062ff;
      outline-color: #fff;
    }

    &:hover {
      background-color: #0353e9;
      color: #fff;
    }
  `
}

export default baseButtonStyle
