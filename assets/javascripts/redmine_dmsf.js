/*
* Redmine plugin for Document Management System "Features"
*
* Copyright (C) 2013   Karel Pičman <karel.picman@kontron.com>
*
* This program is free software; you can redistribute it and/or
* modify it under the terms of the GNU General Public License
* as published by the Free Software Foundation; either version 2
* of the License, or (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program; if not, write to the Free Software
* Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/

function manipulation_link(action) {
  jQuery('#entries_form').attr('action', action);
  jQuery('#entries_form').submit();
};

function confirmation_link(action, question) {
  if(!window.confirm(question)) {
    return;
  }
  jQuery('#entries_form').attr('action', action);
  jQuery('#entries_form').submit();
};        