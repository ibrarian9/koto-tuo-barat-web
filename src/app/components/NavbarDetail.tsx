"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import {Dialog, DialogPanel} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigation = [
        { name: 'Beranda', href: '/#home' },
        { name: 'Profil', href: '/#profil' },
        { name: 'Galeri', href: '/#gallery' },
        { name: 'Lokasi', href: '/#lokasi' }
    ]

    return (
        <header className="fixed inset-x-0 top-0 z-[999]">
            <nav className={`flex items-center justify-between p-3 lg:px-8 bg-secondary bg-opacity-35 text-primary ${mobileMenuOpen ? 'hidden' : ''}`} aria-label="Global">
                <Link href="/" className="flex flex-none" passHref>
                    <div className="-m-1.5 p-1.5">
                        <span className="sr-only">Logo XII Koto Kampar</span>
                        <img className="h-12 w-auto" src="/logo-13-koto-kampar.png" alt="XII Koto Kampar"/>
                    </div>
                    <div className="grid place-items-center mx-2">
                        <h2 className="font-medium">Desa Koto Tuo Barat</h2>
                    </div>
                </Link>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:gap-x-7 lg:justify-end">
                    {navigation.map((item) => (
                        <button>
                            <Link
                                key={item.name}
                                href={item.href}
                                className='w-auto font-medium text-secondary md:grid items-center'
                            >
                                {item.name}
                            </Link>
                        </button>
                    ))}
                </div>
            </nav>

            {/* Mobile Menu */}
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
            <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary px-6 py-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" passHref>
                            <div className="-m-1.5 p-1.5">
                                <span className="sr-only">Logo XIII Koto Kampar</span>
                                <img className="h-12 w-auto" src="/logo-13-koto-kampar.png" alt="Logo 13 Koto Kampar" />
                            </div>
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <ScrollLink
                                        key={item.name}
                                        to={item.href}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                                        {item.name}
                                    </ScrollLink>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
