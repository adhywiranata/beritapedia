import {
  COLORS,
  SIZES,
} from '../../../utilities/constants';

export default {
  card: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
  },
  newsImage: {
    width: '100%',
    height: 150,
    alignSelf: 'flex-start',
    resizeMode: 'contain',
    borderRadius: 10,
  },
  infoRow: {
    flexDirection: 'row',
  },
  dateText: {
    color: COLORS.grey,
    fontSize: SIZES.text.small,
  },
  titleText: {
    fontSize: SIZES.text.huge,
    color: COLORS.purple,
    fontWeight: 'bold',
    marginVertical: SIZES.sizing.medium,
  },
  descText: {
    color: COLORS.grey,
    fontSize: SIZES.text.large,
  },
  button: {
    marginVertical: 20,
  },
  buttonText: {
    color: COLORS.softRed,
    fontSize: SIZES.text.large,
    fontWeight: 'bold',
  },
};
