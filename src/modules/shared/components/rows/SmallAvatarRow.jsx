import React from 'react'
import { string } from 'prop-types'
import { Div } from 'glamorous'
import { Image } from 'semantic-ui-react'
import { Metrics, Fonts, Colors } from '../../../../config/constants'

const SmallAvatarRow = ({image, title}) => (
  <Div css={styles.wrapper}>
    <Div css={styles.container}>
      { image &&
      <Div css={styles.avatarImage}>
        <Image src={image} circular fluid />
      </Div>
      }
      <Div css={styles.title}>{title}</Div>
    </Div>
  </Div>
)

SmallAvatarRow.defaultProps = {
  image: undefined
}

SmallAvatarRow.propTypes = {
  title: string.isRequired,
  image: string
}

const styles = {
  wrapper: {
    borderBottom: `1px solid ${Colors.darkDivider}`
  },
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    padding: `${Metrics.smallSpacing} ${Metrics.xsSpacing} ${Metrics.smallSpacing} ${Metrics.xsSpacing}`
  },
  avatarImage: {
    width: Metrics.standardImage,
    marginRight: Metrics.tinySpacing
  },
  title: {
    textAlign: 'center',
    ...Fonts.style.title
  }
}

export default SmallAvatarRow
