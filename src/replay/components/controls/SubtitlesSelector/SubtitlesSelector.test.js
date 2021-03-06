import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SubtitlesSelector from './SubtitlesSelector';

Enzyme.configure({ adapter: new Adapter() });

const mockTracks = [
  {
    language: 'da',
    kind: 'captions',
    label: 'Danish for hearing impaired',
    origin: 'side-loaded'
  },
  {
    language: 'fi',
    kind: 'subtitles',
    label: 'Finnish',
    origin: 'in-stream'
  },
  {
    language: 'sv',
    kind: 'subtitles',
    label: 'Swedish',
    origin: 'in-stream'
  },
  {
    language: 'is',
    kind: 'captions',
    label: 'Icelandic for hearing impaired',
    origin: 'side-loaded'
  }
];

const render = ({
  noSubtitlesLabel = 'No subtitles',
  classNamePrefix = 'v-',
  setProperties,
  textTracks = mockTracks,
  currentTextTrack
}) =>
  shallow(
    <SubtitlesSelector
      noSubtitlesLabel={noSubtitlesLabel}
      classNamePrefix={classNamePrefix}
      toggleContent="T"
      setProperties={setProperties}
      label="Subtitles"
      textTracks={textTracks}
      currentTextTrack={currentTextTrack}
    />
  );

test('<SubtitlesSelector/> renders with all available tracks plus "No subtitles" as options.', () => {
  const rendered = render({});
  expect(rendered.prop('label')).toBe('Subtitles');
  expect(rendered.prop('className')).toBe('subtitles-selector');
  expect(rendered.prop('classNamePrefix')).toBe('v-');
  const items = rendered.prop('items');
  expect(items.length).toBe(5);
  expect(rendered.prop('expandedToggleContent')).toBe('T');
  expect(rendered.prop('collapsedToggleContent')).toBe('T');
  expect(items[4]).toEqual(mockTracks[3]);
  expect(items[0]).toEqual({ noTrack: true, label: 'No subtitles' });
});

test('<SubtitlesSelector/> does not render, if no tracks are available.', () => {
  const rendered = render({ textTracks: [] });
  expect(rendered.getElement()).toBe(null);
});

test('<SubtitlesSelector/> marks the specified track as selected.', () => {
  const rendered = render({ currentTextTrack: mockTracks[2] });
  const selectedItem = rendered.prop('selectedItem');
  expect(selectedItem).toEqual(mockTracks[2]);
});

test('<SubtitlesSelector/> marks the option "No subtitles" as selected if no selected track is specified.', () => {
  const rendered = render({ currentTextTrack: null });
  const selectedItem = rendered.prop('selectedItem');
  expect(selectedItem).toEqual({ label: 'No subtitles', noTrack: true });
});

test('<SubtitlesSelector/> updates property selectedTextTrack with a track when its option is selected, or with null if the "No subtitles" option is selected. ', () => {
  //Should include dive() and expand of Selector?
  const setProperties = jest.fn();
  const rendered = render({ setProperties, classNamePrefix: '' });
  const itemsContainer = rendered.dive().find('div.selector-items');
  const selectorItems = itemsContainer.children().map(c => c.dive());
  selectorItems[3].simulate('click');
  expect(setProperties.mock.calls[0][0].selectedTextTrack).toBe(mockTracks[0]);
  selectorItems[4].simulate('click');
  expect(setProperties.mock.calls[1][0].selectedTextTrack).toBe(null);
  selectorItems[0].simulate('click');
  expect(setProperties.mock.calls[2][0].selectedTextTrack).toBe(mockTracks[3]);
});
