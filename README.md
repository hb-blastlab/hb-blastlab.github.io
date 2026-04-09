# Lab Website – GitHub Pages

## Overview
GitHub Pages 기반 연구실 홈페이지. 깔끔하고 미니멀한 디자인을 지향한다.

## Tech Stack
- **Framework**: Jekyll (GitHub Pages 기본 지원) 또는 순수 HTML/CSS/JS
- **Hosting**: GitHub Pages
- **Design**: 미니멀, 화이트스페이스 중심, 반응형

## Site Structure

```
/
├── index.html          # 메인 (랩 소개, 최신 뉴스 요약)
├── members/
│   └── index.html      # Member 페이지
├── research/
│   └── index.html      # Research 페이지
├── publications/
│   └── index.html      # Publication 페이지 (탭 또는 섹션 3개)
├── news/
│   └── index.html      # News 페이지
├── joinus/
│   └── index.html      # Join Us 페이지
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── img/            # 프로필 사진, 로고 등
├── _data/              # (Jekyll 사용 시) YAML 데이터 파일
│   ├── members.yml
│   ├── publications.yml
│   └── news.yml
├── _layouts/
│   └── default.html
├── _includes/
│   ├── header.html
│   └── footer.html
└── README.md
```

## Pages

### 1. Home (`/`)
- 연구실 이름, 소속, 한 줄 소개
- 대표 이미지 또는 로고
- 최신 News 2–3건 미리보기

### 2. Members (`/members/`)
카테고리:
- **Professor** — 이름, 직위, 연구 분야, 이메일, 사진
- **Undergraduate Students** — 이름, 학년/입학연도, 관심 분야, 사진

### 3. Research (`/research/`)
- 주요 연구 주제별 카드 또는 섹션
- 각 주제: 제목, 간략 설명, 관련 키워드, 대표 이미지(선택)

### 4. Publications (`/publications/`)
내부 서브섹션 (탭 또는 앵커):
- **International** — 국제 학술지/학회 논문
- **Domestic** — 국내 학술지/학회 논문
- **Patents** — 특허

각 항목 형식:
```
저자, "제목," 학술지/학회명, vol., no., pp., 년도.
```

### 5. News (`/news/`)
- 날짜 + 내용 (역순 정렬)
- 수상, 논문 게재, 행사 등

### 6. Join Us (`/joinus/`)
- 모집 대상 (학부 연구생, 대학원생 등)
- 연구실 위치, 연락처
- 지원 방법 안내

## Design Guidelines
- **컬러**: 화이트 배경 + 네이비/다크그레이 텍스트, 포인트 컬러 1개
- **폰트**: Pretendard 또는 Noto Sans KR (한글), Inter (영문)
- **레이아웃**: 최대 너비 1080px, 충분한 여백
- **네비게이션**: 상단 고정 바, 모바일 햄버거 메뉴
- **이미지**: 멤버 사진은 정사각형 통일, lazy loading 적용

## Data Management (Jekyll 사용 시)

`_data/members.yml` 예시:
```yaml
professor:
  - name: "홍길동"
    name_en: "Gildong Hong"
    position: "Assistant Professor"
    email: "hong@hanbat.ac.kr"
    photo: "hong.jpg"
    interests: ["Network Security", "IoT Security"]

undergraduate:
  - name: "김철수"
    year: 2023
    interests: ["Embedded Systems"]
    photo: "kim.jpg"
```

`_data/publications.yml` 예시:
```yaml
international:
  - authors: "G. Hong, C. Kim"
    title: "A Novel Approach to ..."
    venue: "IEEE Access"
    year: 2025
    doi: "https://doi.org/..."

domestic:
  - authors: "홍길동, 김철수"
    title: "..."
    venue: "한국정보보호학회논문지"
    year: 2025

patents:
  - title: "..."
    inventors: "홍길동"
    number: "10-2025-XXXXXXX"
    year: 2025
```

## Development

```bash
# 로컬 실행 (Jekyll)
bundle install
bundle exec jekyll serve

# http://localhost:4000 에서 확인
```

## TODO
- [ ] 기본 레이아웃 및 네비게이션 구현
- [ ] Members 페이지 구현
- [ ] Research 페이지 구현
- [ ] Publications 페이지 (탭 전환) 구현
- [ ] News 페이지 구현
- [ ] Join Us 페이지 구현
- [ ] 반응형 대응
- [ ] SEO 메타 태그 추가
- [ ] Google Analytics 연동 (선택)
