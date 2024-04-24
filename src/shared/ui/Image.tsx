/* eslint-disable jsx-a11y/alt-text */
import { useCallback, useEffect, useState } from 'react'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  loadingClassName: string
  imageClassName: string
}

export const ImageComponent = ({
  loadingClassName,
  imageClassName,
  ...props
}: ImageProps) => {
  const [imgLoaded, setImgLoaded] = useState(false)

  const onLoad = useCallback(() => {
    setImgLoaded(true)
  }, [])

  useEffect(() => {
    const img = new Image()
    img.src = props.src as string
    img.addEventListener('load', onLoad)

    return () => {
      img.removeEventListener('load', onLoad)
    }
  }, [props.src, onLoad])

  return (
    <>
      {imgLoaded ? (
        <img
          className={`${imageClassName} opacity-0 animate-fadeIn`}
          {...props}
        />
      ) : (
        <div className={`${loadingClassName}  opacity-1 animate-fadeOut`} />
      )}
    </>
  )
}
