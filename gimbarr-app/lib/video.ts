
export default function youtube_parser(url: string){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}


export const videoURL= (youtubeUrl: string) => {
    return(

        "https://www.youtube.com/embed/"+ youtube_parser(youtubeUrl)
    )
}
