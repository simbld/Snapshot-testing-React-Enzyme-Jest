import React from 'react';
import { mount } from 'enzyme';
import App from './App';

jest.setTimeout(10000);

it('should render other advice', (done) => {
	const appWrapper = mount(<App />);
	appWrapper.find('ShowOtherAdviceButton').find('button').simulate('click');

	setTimeout(() => {
		appWrapper.update();
		expect(appWrapper.find('.Advice').text()).not.toBe('...');
		done();
	}, 2000);
});
