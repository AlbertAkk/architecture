import { useParams } from 'react-router'
import { projectsMocks } from '../mocks/projectsMocks'
import { useEffect, useState } from 'react'

interface BackgroundImage {
  image: string
  description: string
}

interface House {
  id: number
  name: string
  city: string
  description: string
  backgroundImage: BackgroundImage[]
}

const ProjectPage = () => {
  const { id } = useParams()
  const [selectedHouse, setSelectedHouse] = useState<House>()

  useEffect(() => {
    if (id) {
      const foundHouse = projectsMocks.find((elem) => elem.id === +id)

      if (foundHouse) {
        setSelectedHouse(foundHouse)
      }
    }
  }, [id])

  return (
    <div className="projectPageWrapper">
      <div
        className="projectPageMainBg"
        style={{
          backgroundImage: selectedHouse?.backgroundImage
            ? `url(${require(
                `./../assets/${selectedHouse.backgroundImage[0].image}`
              )})`
            : 'none',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      >
        <h2 className="projectPageName">{selectedHouse?.description}</h2>
      </div>
      <p className="projectPageMainDesc">
        {selectedHouse?.backgroundImage[0].description}
      </p>
      <div className="projectPageBlock">
        {selectedHouse ? (
          selectedHouse.backgroundImage.slice(1).map((elem, index) => {
            return (
              <div key={index} className="projectPageContent">
                <div
                  className="projectPageBackgr"
                  style={{
                    backgroundImage: selectedHouse?.backgroundImage
                      ? `url(${require(`./../assets/${elem.image}`)})`
                      : 'none',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center bottom',
                  }}
                ></div>
                <p className="projectPageDesc">{elem?.description}</p>
              </div>
            )
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default ProjectPage
