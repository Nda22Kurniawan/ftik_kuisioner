import { element } from 'prop-types'
import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Kuisioner
const Kuisioner = React.lazy(() => import('./views/base/accordion/kuisioner/kuisionerReguler'))
const Hasil = React.lazy(() => import('./views/base/accordion/kuisioner/hasil/hasilKuisioner'))

// Profile
const Profile = React.lazy(() => import('./views/profile/profile'))

// Admin
const AdminTendik = React.lazy(() => import('./views/admin/tendik/vmts'));
const Form = React.lazy(() => import('./views/admin/form/form'))

// Dosen
const Vmts = React.lazy(() => import('./views/dosen/vmts/vmts'))
const layMan = React.lazy(() => import('./views/dosen/layanan-manajemen/layananManajemen'))
const SDM = React.lazy(() => import('./views/dosen/pengelolaan-sdm/pengelolaanSDM'))
const Keuangan = React.lazy(() => import('./views/dosen/keuangan/Keuangan'))
const Penelitian = React.lazy(() => import('./views/dosen/penelitian/Penelitian'))
const Pengabdian = React.lazy(() => import('./views/dosen/pengabdian/Pengabdian'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/KP/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/seminar/Cards'))
const Carousels = React.lazy(() => import('./views/base/skripsi/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  // { path: '/dashboard', exact: true, name: 'Home' },
  { path: '/', name: 'Dashboard',exact: true, element: Dashboard },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Kuisioner Mahasiswa', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Reguler', element: Accordion },
  { path: '/base/accordion/kuisioner/kuisionerReguler', name: 'Kuisioner Reguler', element: Kuisioner},
  { path: '/base/accordion/kuisioner/hasil/hasilKuisioner', name: 'Hasil Kuisioner', element: Hasil},
  { path: '/forms/input-group', name: 'Reguler', element: InputGroup },
  { path: '/base/KP', name: 'KP', element: Breadcrumbs },
  { path: '/base/seminar', name: 'Seminar', element: Cards },
  { path: '/base/skripsi', name: 'Skripsi (Tugas AKhir)', element: Carousels },
  // { path: '/base/collapses', name: 'Collapse', element: Collapses },
  // { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  // { path: '/base/navs', name: 'Navs', element: Navs },
  // { path: '/base/paginations', name: 'Paginations', element: Paginations },
  // { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  // { path: '/base/popovers', name: 'Popovers', element: Popovers },
  // { path: '/base/progress', name: 'Progress', element: Progress },
  // { path: '/base/spinners', name: 'Spinners', element: Spinners },
  // { path: '/base/tables', name: 'Tables', element: Tables },
  // { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  // { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  // { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  // { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  // { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  // { path: '/charts', name: 'Charts', element: Charts },
  { path: '/dosen', name: 'Kuisioner Dosen', element: Cards, exact: true },
  { path: '/dosen/vmts', name: 'VMTS', element: Vmts },
  { path: '/dosen/hasil/hasilKuisioner', name: 'Hasil Kuisioner', element: Hasil},
  { path: '/dosen/layanan-manajemen', name: 'Layanan Manajemen', element: layMan},
  { path: '/dosen/pengelolaan-sdm', name: 'Pengelolaan SDM', element: SDM},
  { path: '/dosen/keuangan', name: 'Layanan Keuangan', element: Keuangan},
  { path: '/dosen/penelitian', name: 'Pengelolaan Penelitian', element: Penelitian},
  { path: '/dosen/pengabdian', name: 'Pengabdian Masyarakat', element: Pengabdian},

  { path: '/tendik', name: 'Kuisioner Tendik', element: Cards, exact: true },
  { path: '/tendik/vmts', name: 'VMTS', element: Vmts },
  { path: '/tendik/hasil/hasilKuisioner', name: 'Hasil Kuisioner', element: Hasil},
  { path: '/tendik/layanan-manajemen', name: 'Layanan Manajemen', element: layMan},
  { path: '/tendik/pengelolaan-sdm', name: 'Pengelolaan SDM', element: SDM},
  { path: '/tendik/keuangan', name: 'Layanan Keuangan', element: Keuangan},

  { path: '/admin', name: 'Input Kuisioner', element: Cards, exact: true },
  { path: '/admin/tendik', name: 'Input Kuisioner Tendik', element: AdminTendik},
  { path: '/admin/form/form', name: 'Form Kuisioner', element: Form},

  // { path: '/forms', name: 'Input Kuisioner', element: FormControl, exact: true },
  { path: '/forms/select', name: 'KP', element: Select },
  // { path: '/forms/checks-radios', name: 'Seminar', element: ChecksRadios },
  // { path: '/forms/range', name: 'Skripsi', element: Range },
  // { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  // { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  // { path: '/forms/layout', name: 'Layout', element: Layout },
  // { path: '/forms/validation', name: 'Validation', element: Validation },
  // { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  // { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  // { path: '/icons/flags', name: 'Flags', element: Flags },
  // { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/profile/profile', name: 'Profile', element: Profile },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
