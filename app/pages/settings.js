import Player from '../components/player'


const UserSettings = () => {
  const videoJsOptions = {
    techOrder: ['youtube'],
    autoplay: false,
    controls: true,
    sources: [
      {
        src: 'https://www.youtube.com/watch?v=IxQB14xVas0',
        type: 'video/youtube',
      },
    ],
  }

  return (
    <>
      <iframe width="50" height="10" src="https://www.youtube.com/embed/ZqTI3zxdJKw" title="Saw en Gusano | Gimbarr" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </>
  )
}

export default UserSettings
