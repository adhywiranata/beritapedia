import {
  COLORS,
  SIZES,
} from '../../../utilities/constants';

export default {
  card: {
    padding: SIZES.sizing.medium,
    margin: SIZES.sizing.thick,
    marginTop: SIZES.sizing.medium,
    marginBottom: SIZES.sizing.thin,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  leftColumn: {
    flex: 0,
    width: 100,
    height: 100,
  },
  rightColumn: {
    padding: SIZES.sizing.medium,
    paddingTop: 0,
  },
  newsImage: {
    backgroundColor: COLORS.grey,
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  dateText: {
    color: COLORS.grey,
    fontSize: SIZES.text.tiny,
  },
  titleText: {
    fontSize: SIZES.text.large,
    fontWeight: 'bold',
  },
  descText: {
    color: COLORS.grey,
    fontSize: SIZES.text.small,
    marginTop: 10,
  },
};
