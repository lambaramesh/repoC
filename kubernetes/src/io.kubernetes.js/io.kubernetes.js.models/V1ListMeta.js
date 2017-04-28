/**
 * Kubernetes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.6.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['io.kubernetes.js/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1ListMeta = factory(root.KubernetesJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1ListMeta model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1ListMeta
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1ListMeta</code>.
   * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1ListMeta
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>V1ListMeta</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1ListMeta} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1ListMeta} The populated <code>V1ListMeta</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('resourceVersion')) {
        obj['resourceVersion'] = ApiClient.convertToType(data['resourceVersion'], 'String');
      }
      if (data.hasOwnProperty('selfLink')) {
        obj['selfLink'] = ApiClient.convertToType(data['selfLink'], 'String');
      }
    }
    return obj;
  }

  /**
   * String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#concurrency-control-and-consistency
   * @member {String} resourceVersion
   */
  exports.prototype['resourceVersion'] = undefined;
  /**
   * SelfLink is a URL representing this object. Populated by the system. Read-only.
   * @member {String} selfLink
   */
  exports.prototype['selfLink'] = undefined;



  return exports;
}));

