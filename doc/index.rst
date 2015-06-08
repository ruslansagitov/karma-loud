karma-loud
==========

.. rubric:: Karma plugin for Loud, web accessibility testing helper

Getting Started
---------------

::

    npm install karma-loud --save-dev

.. code-block:: javascript

   /* karma.conf.js */
   module.exports = function(config) {
       config.set({
           frameworks: ['loud']
       });
   };
