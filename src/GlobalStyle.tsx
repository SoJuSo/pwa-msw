import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const APP_MAX_WIDTH = 600;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GlobalStyle = createGlobalStyle<any>`
    ${normalize}

    *{
        color: ${(props) => props.theme.text_primary_color};
        &::-webkit-scrollbar {
          width: 0.4rem;
        }
        &::-webkit-scrollbar-thumb {
          background-color: hsla(0, 0%, 42%, 0.29);
          border-radius: 100px;
        }
    }
    body {
        background-color: ${(props) => props.theme.background_color};
    }

    html,
    body {
      font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
      height: 100%;
      /* height: 100%;
      box-sizing: border-box;
      touch-action: manipulation;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overscroll-behavior-x: none; */
    }

    body {
      /* position: relative;
      min-height: 100%;
      margin: 0; */
      overflow-y: scroll;
    }

    #root {
      width: 100%;
      max-width: ${APP_MAX_WIDTH}px;
      height: 100%;
      margin: 0 auto;
    }

    div, 
    section,
    nav,
    aside {
      display: flex;
      flex-direction: column;
    }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
