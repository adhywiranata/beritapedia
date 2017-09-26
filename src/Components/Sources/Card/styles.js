import {
  COLORS,
  SIZES,
} from '../../../utilities/constants';

export default {
  card: {
    paddingVertical: SIZES.sizing.medium,
    paddingHorizontal: SIZES.sizing.thick,
    margin: SIZES.sizing.thin,
    marginTop: SIZES.sizing.thin,
    marginBottom: SIZES.sizing.thin,
    justifyContent: 'space-between',
    flex: 1,
  },
  titleText: {
    fontSize: SIZES.text.large,
    color: COLORS.purple,
    fontWeight: 'bold',
  },
  descText: {
    color: COLORS.grey,
    fontSize: SIZES.text.small,
  },
};
