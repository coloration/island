import IIcon from './IIcon.vue'
import IconAccessibility from '~icons/carbon/accessibility'
import IconAccountBox from '~icons/mdi/account-box'

import {
  IBarChartIcon,
  IBoardIcon,
  IBoxIcon,
  IConnectIcon,
  IDashboardIcon,
  IDotsIcon,
  IEnterIcon,
  IFlickIcon,
  IInboxIcon,
  IInterIcon,
  IMessageIcon,
  IPathIcon,
  ITaskIcon,
  IUsergroupIcon,

  IDirectionIcon,
  IArrowIcon,
} from './index'

export default {
  title: 'Component/IIcon',
  component: IIcon,
  argTypes: {
    type: { 
      control: { 
        type: 'radio', options: [undefined, 'primary', 'normal', 'ghost'] } 
      },
  },
};

const Template = (args) => ({
  components: { IconAccessibility, IconAccountBox },
  setup() {
    return { ...args }
  },
  template: `
    iconify

    import IconAccessibility from '~icons/carbon/accessibility'

    <icon-accessibility/>

    import IconAccountBox from '~icons/mdi/account-box'
    
    <icon-account-box style="font-size: 2em; color: blue"/>
  `,
});

export const Default = Template.bind({})

Default.args = {
  type: 'primary',
}

export const ActiveIcon = (args) => ({
  components: {
    IBarChartIcon,
    IBoardIcon,
    IBoxIcon,
    IConnectIcon,
    IDashboardIcon,
    IDotsIcon,
    IEnterIcon,
    IFlickIcon,
    IInboxIcon,
    IInterIcon,
    IMessageIcon,
    IPathIcon,
    ITaskIcon,
    IUsergroupIcon,
  },
  template: `
    <table>
      <tbody>
      <tr>
        <td>IBarChartIcon</td>
        <td><IBarChartIcon /></td>
        <td><IBarChartIcon active /></td>
      </tr>
      <tr>
        <td>IBoardIcon</td>
        <td><IBoardIcon /></td>
        <td><IBoardIcon active /></td>
      </tr>
      <tr>
        <td>IBoxIcon</td>
        <td><IBoxIcon /></td>
        <td><IBoxIcon active /></td>
      </tr>
      <tr>
        <td>IConnectIcon</td>
        <td><IConnectIcon /></td>
        <td><IConnectIcon active /></td>
      </tr>
      <tr>
        <td>IDashboardIcon</td>
        <td><IDashboardIcon /></td>
        <td><IDashboardIcon active /></td>
      </tr>
      <tr>
        <td>IDotsIcon</td>
        <td><IDotsIcon /></td>
        <td><IDotsIcon active /></td>
      </tr>
      <tr>
        <td>IEnterIcon</td>
        <td><IEnterIcon /></td>
        <td><IEnterIcon active /></td>
      </tr>
      <tr>
        <td>IFlickIcon</td>
        <td><IFlickIcon /></td>
        <td><IFlickIcon active /></td>
      </tr>
      <tr>
        <td>IInboxIcon</td>
        <td><IInboxIcon /></td>
        <td><IInboxIcon active /></td>
      </tr>
      <tr>
        <td>IInterIcon</td>
        <td><IInterIcon /></td>
        <td><IInterIcon active /></td>
      </tr>
      <tr>
        <td>IMessageIcon</td>
        <td><IMessageIcon /></td>
        <td><IMessageIcon active /></td>
      </tr>
      <tr>
        <td>IPathIcon</td>
        <td><IPathIcon /></td>
        <td><IPathIcon active /></td>
      </tr>
      <tr>
        <td>ITaskIcon</td>
        <td><ITaskIcon /></td>
        <td><ITaskIcon active /></td>
      </tr>
      <tr>
        <td>IUsergroupIcon</td>
        <td><IUsergroupIcon /></td>
        <td><IUsergroupIcon active /></td>
      </tr>
      </tbody>
    </table>
 
    
  `
})


export const DirectionIcon = (args) => ({
  components: {
    IDirectionIcon,
    IArrowIcon,
  },
  template: `
    <table>
      <tbody>
        <tr>
          <td>IDirectionIcon</td>
          <td><IDirectionIcon /></td>
          <td><IDirectionIcon direction="left" /></td>
          <td><IDirectionIcon direction="up" /></td>
          <td><IDirectionIcon direction="right" /></td>
        </tr>
        <tr>
          <td>IArrowIcon</td>
          <td><IArrowIcon /></td>
          <td><IArrowIcon direction="left" /></td>
          <td><IArrowIcon direction="up" /></td>
          <td><IArrowIcon direction="right" /></td>
        </tr>
      <tbody>
    </table>
  `
})