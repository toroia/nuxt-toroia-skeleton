import moment from 'moment'

import 'moment/locale/fr'

import 'moment-timezone'

moment.locale('fr')

moment.tz.setDefault('Europe/Paris')

export default (ctx, inject) => {
  ctx.$moment = moment
  inject('moment', moment)
}
