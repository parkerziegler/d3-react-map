import { Line } from '../components/graphs/Line/Line';
import mockShootingsByDate from '../__mocks__/mock-shootings-by-date.json';

describe('<Line />', () => {
  const props = {
    maps: {
      shootingsByDate: mockShootingsByDate,
    },
    router: {
      route: '/shootings-by-date',
    },
  };

  it('renders without crashing', () => {
    const wrapper = shallow(<Line {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the full DOM without crashing', () => {
    const wrapper = mount(<Line {...props} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
