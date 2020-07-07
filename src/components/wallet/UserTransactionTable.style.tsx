import { Typography } from 'antd'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import Table from '../../components/uielements/table'

const { Text } = Typography

export const StyledTable = styled(Table)`
  .ant-table-thead > tr > th {
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    font-family: 'MainFontRegular';
    border: none;
  }

  .ant-table-tbody > tr > td {
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    font-family: 'MainFontRegular';
    border: none;
  }
`

export const StyledText = styled(Text)`
  text-transform: uppercase;
  font-weight: 600;
  color: ${palette('text', 1)};
`

export const StyledLink = styled(Text)`
  font-weight: 600;
  text-transform: uppercase;
  color: ${palette('primary', 0)};
`