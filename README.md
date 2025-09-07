# 개인 웹사이트 프로젝트

포트폴리오 및 블로그 용도로 제작한 개인 웹사이트입니다. [해당 사이트](https://brittanychiang.com/)를 참고해서 만들었습니다.

## 🛠️ 사용 기술

- React, Typescript, Vite, Tanstack Router, Tanstack Store, Tailwind CSS, PostCSS

<p align="center">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="React" width=36/>
    <img src="https://devicon-website.vercel.app/api/typescript/original.svg" alt="typescript" width=36/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="vite" width=36 />
    <img src="https://tanstack.com/images/logos/logo-color-100.png" alt="tanstack" width=36 />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="tailwindcss" width=36 />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postcss/postcss-original.svg" alt="postcss" width=36 />

</p>

## 🏛️ 프로젝트 구조

단순히 프로젝트의 구조를 나열하기 보다 구조안에 담긴 의미를 설명합니다. 대규모 프론트엔드 프로젝트에서의 폴더 설계를 고려하였습니다.


- components: 재사용 가능한 컴포넌트 [MUI](https://mui.com/material-ui/all-components/) 기반의 컴포넌트 분류방식을 따라 정리했습니다. 대규모 프로젝트에서 수많은
  컴포넌트들을 관리할 때 유용합니다.
    - `display` (Data Display): 데이터를 구조화해서 시각적으로 보여주는 컴포넌트의 모음입니다. (예: Avatar, Card, List, Table 등)
    - `inputs`: 사용자들의 입력을 받는 컴포넌트의 모음입니다. (예: Button, Checkbox, TextArea, Dropdown 등)
    - `layouts`: 페이지의 레이아웃을 구성하는 컴포넌트의 모음입니다. (예: Container, Grid, Stack 등)

  그 외에도 `navigation`, `feedback` 등의 카테고리가 유용하게 쓰입니다.
- services: API 통신과 관련된 로직을 담당합니다. Axios 인스턴스를 생성하고, 각 API 엔드포인트에 대한 함수를 정의합니다.
- types: 서비스에서 다루는 데이터의 타입을 정의합니다. API 응답 전달 및 컴포넌트 생성시, 리터럴 데이터를 넘기기보다 타입 데이터를 prop 등으로 전달하는 방식을 만들 때 더 명시적이고 안정적인 코드를
  작성할 수 있습니다.
- routes: SPA 전반의 라우팅을 처리합니다. Tanstack Router를 사용하여 라우팅을 구현했습니다.
    - `rootRouter` 를 정의하고 각 페이지를 라우트로 등록합니다. 각 페이지에 라우트를 정의하는 것 보다 한곳에 모음으로써 접근성을 높였습니다.


