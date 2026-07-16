# 내 위키 (Eleventy + Decap CMS + Netlify)

혼자만 쓰는 세계관/소설/게임 설정 위키입니다.
비용은 GitHub(무료) + Netlify(무료 티어)만으로 충분합니다.

## 1. GitHub에 올리기

1. https://github.com 에서 새 저장소(Repository)를 만듭니다. (Private으로 만들어도 됩니다)
2. 이 폴더의 압축을 풀고, 저장소에 업로드합니다.
   - GitHub 웹사이트에서 "Add file → Upload files"로 드래그해서 올려도 되고,
   - `git` 명령어를 아는 경우:
     ```
     git init
     git add .
     git commit -m "first commit"
     git branch -M main
     git remote add origin <내 저장소 주소>
     git push -u origin main
     ```

## 2. Netlify에 배포하기

1. https://app.netlify.com 에서 로그인 (GitHub 계정으로 로그인하면 편합니다)
2. "Add new site" → "Import an existing project" → GitHub 선택 → 방금 만든 저장소 선택
3. Build command / Publish directory는 `netlify.toml`에 이미 설정되어 있어서 자동으로 채워집니다.
   - Build command: `npm run build`
   - Publish directory: `_site`
4. Deploy 클릭 → 몇 분 뒤 `https://랜덤이름.netlify.app` 링크가 생깁니다.
   (Site settings에서 이름을 원하는 것으로 바꿀 수 있습니다.)

## 3. 로그인 기능 켜기 (나만 접속 가능하게)

1. Netlify 대시보드 → 해당 사이트 → **Site configuration → Identity → Enable Identity**
2. Identity 설정에서 **Registration → "Invite only"**로 변경 (아무나 가입 못 하게)
3. 같은 화면에서 **Services → Git Gateway → Enable Git Gateway** 클릭
   (이걸 켜야 관리자 화면에서 글을 쓰면 GitHub 저장소에 실제로 저장됩니다)
4. **Identity 탭 → Invite users** 에서 내 이메일 주소로 나를 초대
5. 초대 이메일이 오면 링크를 눌러 비밀번호를 설정

## 4. 글쓰기

1. 배포된 사이트 주소 뒤에 `/admin` 을 붙여서 접속 (예: `https://내사이트.netlify.app/admin`)
2. 아까 설정한 이메일/비밀번호로 로그인
3. "위키 문서" 컬렉션에서 새 문서 추가 → 제목/카테고리/본문 작성 → 저장(Publish)
4. 몇 초~몇 분 뒤 사이트에 자동 반영됩니다 (Netlify가 자동으로 다시 빌드)
5. 휴대폰, 태블릿, 다른 컴퓨터 어디서든 같은 링크(`/admin`)로 로그인해서 편집 가능합니다.

## 5. 위키를 여러 개 만들고 싶을 때

이 저장소를 통째로 복제해서 새 저장소로 만들면 됩니다.
- GitHub에서 이 저장소 페이지 → **"Use this template"** 버튼으로 새 저장소 생성
  (또는 그냥 파일을 복사해서 새 저장소를 만들어도 됩니다)
- 2번 단계(Netlify 배포)부터 그대로 반복하면, 완전히 독립된 새 위키 링크가 생깁니다.
- 세계관별로 저장소를 따로 두면 서로 섞이지 않고 깔끔하게 관리할 수 있습니다.

## 로컬(내 컴퓨터)에서 미리 보고 싶다면

```
npm install
npm run start
```
`http://localhost:8080` 에서 확인할 수 있습니다. (단, 관리자 화면 로그인은 배포 후에만 정상 동작합니다)
