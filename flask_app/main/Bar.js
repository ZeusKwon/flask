/* This example requires Tailwind CSS v2.0+ */
import { Fragment, Component } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import logo from '../image/logo.png'

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: RefreshIcon,
  },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

class Example extends Component {
  render() {
    return (
      <Popover className="relative bg-red-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center md:justify-start md:space-x-10">
                <div className="flex justify-start items-center lg:w-0 lg:flex-1 justify-center h-20">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto sm:h-16"
                      src={logo}
                      alt=""
                      onClick={function(e){
                        e.preventDefault();
                        this.props.onChangeMode();
                      }.bind(this)}
                    />
                  </a>
                </div>
                <form action="/" method="get" className="ml-8 my-6 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-white rounded-md shadow-sm text-base font-medium bg-white">
                  <input
                    type="text"
                    id="header-search"
                    placeholder="Search"
                    name="s"
                    className="ml-20 inline-flex items-center justify-center px-20 "
                  />
                  <button type="submit" className="inline-flex items-center justify-center px-3">??????</button>
                </form>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <a href="#" className="whitespace-nowrap text-base font-medium text-white hover:text-gray-900">
                    ?????????
                  </a>
                  <a
                    href="#"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-white rounded-xl shadow-sm text-base font-medium text-white hover:bg-black"
                  >
                    ????????????
                  </a>
                </div>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                          alt="Workflow"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        {solutions.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                          >
                            <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                            <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5 space-y-6">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                      <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                        Pricing
                      </a>

                      <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                        Docs
                      </a>
                      {resources.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-base font-medium text-gray-900 hover:text-gray-700"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div>
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        ????????????
                      </a>
                      <p className="mt-6 text-center text-base font-medium text-gray-500">
                        Existing customer?{' '}
                        <a href="#" className="text-indigo-600 hover:text-indigo-500">
                          ?????????
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  }
}

export default Example;
