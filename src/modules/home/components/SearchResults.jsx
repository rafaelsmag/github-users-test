import React from 'react'
import SmallAvatarRow from '../../shared/components/rows/SmallAvatarRow'
import { Metrics, Colors } from '../../../config/constants'
import { Div } from 'glamorous'

function renderResults (results) {
  return results.map((result) => {
    return (
      <SmallAvatarRow key={result.id} image={result.image} title={result.name}/>
    )
  })
}

const SearchResults = ({ results, isLoading }) => (
  <Div>
    { results.length > 0 && !isLoading &&
      <Div css={styles.resultList}>
        {renderResults(results)}
      </Div>
    }
  </Div>
)

const styles = {
  resultList: {
    overflow: 'auto',
    height: '40vh',
    border: `${Metrics.borderWidth} solid ${Colors.darkDivider}`,
    borderRadius: `0 0 ${Metrics.borderRadius} ${Metrics.borderRadius}`,
    backgroundColor: `${Colors.whiteLight}`
  }
}

export default SearchResults
