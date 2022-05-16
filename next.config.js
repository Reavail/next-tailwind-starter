/* eslint-disable @typescript-eslint/no-var-requires */

const withTranspiledModules = require('next-transpile-modules')([

])

// Constants
const DEFAULT_LOCALE = process.env.NEXT_PUBLIC_DEFAULT_LOCALE
const LOCALES = process.env.NEXT_PUBLIC_SUPPORTED_LOCALES.split('|')

const nextConfiguration = {
  /**
   * Enable react strict mode.
   */
  reactStrictMode: true,

  /**
   * Remove x-powered-by header.
   */
  poweredByHeader: false,

  /**
   * Locale configuration
   */
  i18n: {
    locales: LOCALES,
    localeDetection: true,
    defaultLocale: DEFAULT_LOCALE
  },

  /**
   * Image configuration
   */
  images: {
    disableStaticImages: true,
    deviceSizes: [320, 640, 768, 1024, 1280, 1360],
  },

  /**
   * Experimental features configuration.
   */
  experimental: {
    optimizeCss: true
  }
}

module.exports = withTranspiledModules(nextConfiguration)
