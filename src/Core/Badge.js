import glamorous from 'glamorous-native';

import { COLORS } from 'beritapedia/src/utilities/constants';

export default glamorous.view({
  flex: 0,
  alignSelf: 'flex-start',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  paddingVertical: 4,
  paddingHorizontal: 10,
  backgroundColor: COLORS.grey,
  borderRadius: 15,
});
