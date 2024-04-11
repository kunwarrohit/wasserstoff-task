import Image from "next/image";  
import MovingWrodsCss from './MovingWords.module.css'
const MovingWords = () => {
  return (
    <div>
      <h1 className={MovingWrodsCss.para}>WE
        <div className={MovingWrodsCss.myMovingImages}>
            <Image src="/assets/images/i1.png" alt="logo" width={276} height={61} />
        </div> ORGANIZE THE
      </h1>

      <h1 className={MovingWrodsCss.para}>CONNECTION
        <div className={MovingWrodsCss.myMovingImages}>
            <Image src="/assets/images/i2.png" alt="logo" width={391} height={74} />
        </div>
      </h1>

      <h1 className={MovingWrodsCss.para}>
        <div className={MovingWrodsCss.myMovingImages}>
            <Image src="/assets/images/i3.png" alt="logo" width={341} height={74} />
        </div> BETWEEN
        <Image src="/assets/images/i4.png" alt="logo" width={176} height={74} /> MUSIC
       </h1>

      <h1 className={MovingWrodsCss.para}>ARTIST 
        <div className={MovingWrodsCss.myMovingImages}>
            <Image src="/assets/images/i5.png" alt="logo" width={299} height={74} />
        </div> CULTURE 
        <div className={MovingWrodsCss.myMovingImages}>
            <Image src="/assets/images/i6.png" alt="logo" width={307} height={74} />
        </div>
       </h1>

      <h1 className={MovingWrodsCss.para}>
        <div className={MovingWrodsCss.myMovingImages}>
            <Image src="/assets/images/i7.png" alt="logo" width={227} height={74} />
        </div> ART
        <Image src="/assets/images/i8.png" alt="logo" width={151} height={74} /> & COLLECTIONS
       </h1>
      

    </div>
  )
}

export default MovingWords
