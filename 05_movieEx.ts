// articleList 안의 movie 목록
interface Movie {
    title: string;
    url: string;
    image: string;
    authorName: string;
    authorUrl: string;
    authorImage: string;
    createTime: string;
}
// 전체 목록 
interface MovieInfos {
    articleList: Movie[];
    lastPublishTime: number | string;
    moreList: boolean;
}
// 출력 목록
interface MovieList{
    rank: number;
    title: string;
}

async function fetchMovieData(url: string): Promise<MovieInfos> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('요청에 실패. 상태코드 : ' + response.status);
    }
    const data: MovieInfos = await response.json();
    return data; 
}

function validateMovieData(data: MovieInfos): void {
    if (!data) {
        throw new Error('데이터가 없습니다.');
    }
    if (!data.articleList || data.articleList.length === 0) {
        throw new Error('데이타가 없습니다.');
    }
}

function extractMovieInfos(articleList: Array<Movie>): Array<MovieList> {
    return articleList.map((article, idx) => 
        ({ title: article.title, rank: idx + 1 })
    );
}

function displayMovies(movieInfos: Array<MovieList>): void {
    for (const movie of movieInfos) {
        console.log(`[${movie.rank}위] ${movie.title}`);
    }
}

//URL
const url = 'http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json';
//실행함수
async function movies(): Promise<void> {
    try {
        const data: MovieInfos  = await fetchMovieData(url);
        validateMovieData(data);
        const movieInfos: Array<MovieList> = extractMovieInfos(data.articleList);
        displayMovies(movieInfos);
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error('에러 발생: ', err.message);
        } else {
            console.error('알 수 없는 에러 발생');
        }
    }
}

movies();